import csv, io
from django.shortcuts import render, redirect, HttpResponse
from . models import foodrecords, foodlist, foodratings
from django.contrib.auth.decorators import permission_required
from django.contrib.auth.models import User, auth
from django.contrib import messages
from textblob import TextBlob

#@permission_required('admin.can_add_log_entry')
def foodstatus(request):
    items=foodrecords.objects.all()
    response=HttpResponse(content_type='text/csv')
    response['Content-Disposition']='attachment; filename="foodrecord.csv"'

    writer=csv.writer(response, delimiter=',')
    writer.writerow(['id','date','day','foodname','fid','occuation','prepared','wasted'])

    for obj in items:
        writer.writerow([obj.id,obj.date,obj.day,obj.foodname,obj.fid,obj.occuation,obj.prepared,obj.wasted])

    return response



def index(request):
    return render(request,'index.html')


def addfoodlistpage(request):
    return render(request,'addfoodlist.html')

def addfoodlist(request):
    if request.method=='POST':
        foodname=request.POST['foodname']
        print(foodname)
        
        if foodlist.objects.filter(foodname=foodname).exists():
            print('Food name is taken')
            messages.info(request,'Food is Taken')
            return render(request,'addfoodlist.html')
        else:
            newfoodrecords= foodlist(foodname=foodname)
            newfoodrecords.save()
            return redirect('/')

    return redirect('/')


def addentrypage(request):
    foodlists=foodlist.objects.all()
    return render(request,'addentry.html',{'foodlists':foodlists})


def addentry(request):
    if request.method=='POST':
        date=request.POST['date']
        day=request.POST['day']
        fname=request.POST['foodname']
        occuation=request.POST['occuation']
        prepared=request.POST['prepared']
        wasted=request.POST['wasted']
        flist=foodlist.objects.get(foodname=fname)
        if prepared>=wasted:
            print("<====================================>")
            print(prepared,">",wasted)
            print(date,fname,occuation,prepared,wasted)
            print("<====================================>")
            newfoodrecords= foodrecords(date=date,day=day,foodname=fname,fid=flist.id,occuation=occuation,prepared=prepared,wasted=wasted)
            newfoodrecords.save()
            return redirect('/')
        else:
            messages.info(request,prepared,"<",wasted)
            print(prepared,">",wasted)
            print("wastage is more then prepared")
            messages.info(request,'wastage is more then prepared')
            return redirect('addentrypage')

    return redirect('/')

def rateyourfoodpage(request):
    foodlists=foodlist.objects.all()
    return render(request,'rateyourfood.html',{'foodlists':foodlists})

def rateyourfood(request):
    if request.method=='POST':
        date=request.POST['date']
        fname=request.POST['foodname']
        desc=request.POST['desc']
        stars=request.POST['selected_rating']
        print(date,fname,desc,stars)
        flist=foodlist.objects.get(foodname=fname)
        foodrating= foodratings(date=date,foodname=fname,fid=flist.id,description=desc,stars=stars)
        foodrating.save()
        
    return redirect('index')

def reviewanalysis(request):
    badcount=0
    goodcount=0
    excellectcount=0
    zerostars=0
    onestars=0
    twostars=0
    threestars=0
    fourstars=0
    fivestars=0
    foodrating= foodratings.objects.all()

    for feedback in foodrating:
        blob = TextBlob(feedback.description)
        print(feedback.stars,feedback.description,"<=====>",blob.sentiment.polarity)
        
        if blob.sentiment.polarity <= 0.1:
            badcount=badcount+1
        elif 0.1 <= blob.sentiment.polarity <= 5:
            goodcount=goodcount+1
        else:
            excellectcount=excellectcount+1
        

        if 5 == feedback.stars:
            fivestars=fivestars+1
        elif 4 == feedback.stars:
            fourstars=fourstars+1
        elif 3 == feedback.stars:
            threestars=threestars+1
        elif 2 == feedback.stars:
            twostars=twostars+1
        elif 1 == feedback.stars:
            onestars=onestars+1
        else:
            zerostars=zerostars+1

    print(badcount,goodcount,excellectcount,onestars,twostars,threestars,fourstars,fivestars)
    reviews={'badcount':badcount,'goodcount':goodcount,'excellectcount':excellectcount,'onestars':onestars,'twostars':twostars,'threestars':threestars,'fourstars':fourstars,'fivestars':fivestars} 
    return render(request,'reviews.html',{'review':reviews})

 
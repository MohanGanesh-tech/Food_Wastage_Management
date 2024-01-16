from django.db import models

# Create your models here.
class foodlist(models.Model):
    foodname= models.CharField(max_length=100)

class foodrecords(models.Model):
    date = models.DateField()
    day= models.CharField(max_length=100)
    foodname= models.CharField(max_length=100)
    fid= models.IntegerField()
    occuation=models.TextField()
    prepared= models.IntegerField()
    wasted= models.IntegerField()

class foodratings(models.Model):
    date = models.DateField()
    foodname= models.CharField(max_length=100)
    fid= models.IntegerField()
    description=models.TextField()
    stars= models.IntegerField()
from django.urls import path
from . import views

urlpatterns = [
    path('',views.index,name='index'),
    path('addfoodlistpage',views.addfoodlistpage,name='addfoodlistpage'),
    path('addfoodlist',views.addfoodlist,name='addfoodlist'),
    path('addentrypage',views.addentrypage,name='addentrypage'),
    path('addentry',views.addentry,name='addentry'),
    path('foodstatus',views.foodstatus,name='foodstatus'),
    path('rateyourfoodpage/',views.rateyourfoodpage,name='rateyourfoodpage'),
    path('rateyourfood/',views.rateyourfood,name='rateyourfood'),
    path('reviewanalysis/',views.reviewanalysis,name='reviewanalysis')
]
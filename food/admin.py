from django.contrib import admin
from . models import foodrecords,foodlist
from import_export.admin import ImportExportActionModelAdmin
# Register your models here.

@admin.register(foodrecords)
class ViewAdmin(ImportExportActionModelAdmin):
    pass
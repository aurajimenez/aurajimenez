from django.conf.urls import url
from .views import *

urlpatterns = [
    url(r'^projects$', projects_list, name ='projects_list'),
]
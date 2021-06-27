from django.conf.urls import url
from .views import *

urlpatterns = [
    url(r'^educations$', educations_list, name ='educations_list'),
]
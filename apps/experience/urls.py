from django.conf.urls import url
from .views import *

urlpatterns = [
    url(r'^experiences$', experiences_list, name ='experiences_list'),
]
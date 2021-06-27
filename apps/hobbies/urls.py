from django.conf.urls import url
from .views import *

urlpatterns = [
    url(r'^hobbies$', hobbies_list, name ='hobbies_list'),
]
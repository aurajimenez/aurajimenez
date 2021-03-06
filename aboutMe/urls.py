"""aboutMe URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.views.generic import TemplateView
from django.contrib import admin
from django.urls import path, re_path
from django.conf.urls import url, include
from apps.education import views
from apps.experience import views
from apps.hobbies import views
from apps.project import views

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api/education/', include('apps.education.urls')),
    url(r'^api/experience/', include('apps.experience.urls')),
    url(r'^api/hobbies/', include('apps.hobbies.urls')),
    url(r'^api/project/', include('apps.project.urls')),
    url('', TemplateView.as_view(template_name='index.html')),
]
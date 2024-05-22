from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("<str:name>", views.greet, name="greet"),
    path("hein", views.hein, name="hein"),
    path("htet", views.hein, name="htet")
]
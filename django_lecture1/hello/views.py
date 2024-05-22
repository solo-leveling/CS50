from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def index(request):
    return HttpResponse("Hello!")

def hein(request):
    return HttpResponse("Hello, Hein")

def hein(request):
    return HttpResponse("Hello, Htet")

def greet(request, name):
    return HttpResponse(f"Hello, {name}")
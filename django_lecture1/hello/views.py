from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, "hello/index.html")

def hein(request):
    return HttpResponse("Hello, Hein")

def hein(request):
    return HttpResponse("Hello, Htet")

# def greet(request, name):
#     # to get name capitalize use .capitalize
#     return HttpResponse(f"Hello, {name.capitalize()}")

def greet(request, name):
    return render(request, "hello/greet.html", {
        "name" : name.capitalize()
    })


    
1. 
django-admin startproject airline    // Create a django new default project named "airline"
cd airline
code .

2. 
python manage.py startapp flights   // Create sub app named flights

3. 
airline/settings.py    add 'flights', in INSTALLED APPS = [ ]

4. 
airline/urls.py        include, path
urlpatterns = [
    path("flights/", include("flights.urls"))
]
   
   flights/ > Create file urls.py
   from django.urls import path
   from . import views
   urlpatterns = [

   ]

5. 
flights/models.py
from django.db import models
# Create your models headers
class Flight(models.Model):
    origin = models.ForeignKey(Airport, on_delete=models.CASCADE, related_name="departures")
    destination = models.ForeignKey(Airport, on_delete=models.CASCADE, related_name="arrivals")
    duration = models.IntegerField()

6.
python manage.py makemigrations
python manage.py migrate

python manage.py shell
>>> from flights.models import Flight
>>> f = Flight(origin="New York", destination="London", duration=415)
>>> f.save()
>>> Flight.objects.all()
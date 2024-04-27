from django.urls import path
from . import views

urlpatterns = [
    path('mental_prediction/',views.mental_prediction, name='mental_prediction'),
]
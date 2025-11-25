from django.http import JsonResponse

# Create your views here.
def home(request):
    data = {
        'message': 'Welome to the E-commere Store!'
    }
    return JsonResponse(data)
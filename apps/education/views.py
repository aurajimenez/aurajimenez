from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Education
from .serializers import *

@api_view(['GET', 'POST'])
def educations_list(request):
    if request.method == 'GET':
        data = Education.objects.all()

        serializer = EducationSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = EducationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
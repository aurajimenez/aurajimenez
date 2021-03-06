from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Project
from .serializers import *

@api_view(['GET', 'POST'])
def projects_list(request):
    if request.method == 'GET':
        data = Project.objects.all()

        serializer = ProjectSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ProjectSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
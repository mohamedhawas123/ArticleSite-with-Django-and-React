from rest_framework import viewsets
from .serializers import ArticleSerializer
from articls.models import Articls
from rest_framework.permissions import AllowAny, IsAuthenticated


class ArticlViewSet(viewsets.ModelViewSet):

    queryset = Articls.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = (AllowAny, )

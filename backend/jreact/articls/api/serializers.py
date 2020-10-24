from rest_framework import serializers

from articls.models import Articls


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Articls
        fields = ('id', 'title', 'content')

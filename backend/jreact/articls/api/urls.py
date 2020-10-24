
from django.urls import path, include
from articls.api.views import ArticlViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('', ArticlViewSet, basename='articles')
urlpatterns = router.urls

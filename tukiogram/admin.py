from django.contrib.gis import admin
from leaflet.admin import LeafletGeoAdmin

from tukiogram.models import Tukio

admin.site.site_header = 'The samaritan'


# Register your models here.

class TukioAdmin(LeafletGeoAdmin):
	settings_overrides = {
		'DEFAULT_ZOOM': 16,
	}

class TukioAdmin(admin.ModelAdmin):
	list_display = ["category", "user", "timestamp"]
 	list_filter = ["category", "timestamp"]
	search_fields = ["category"]
 
class Meta:
	model = Tukio

#class TukioAdmin

admin.site.register(Tukio, TukioAdmin)

# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-03-12 17:21
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tukiogram', '0002_tukio_location_name'),
    ]

    operations = [
        migrations.RenameField(
            model_name='tukio',
            old_name='location',
            new_name='location_geom',
        ),
    ]

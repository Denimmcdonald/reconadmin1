from __future__ import unicode_literals

from django.contrib.auth.base_user import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from django.contrib.gis.db import models
from django.core.mail import send_mail
from django.utils.translation import ugettext_lazy as _

from .managers import UserManager


class User(AbstractBaseUser, PermissionsMixin):
	email = models.EmailField(_('email address'), unique=True)
	first_name = models.CharField(_('first name'), max_length=30, blank=True)
	last_name = models.CharField(_('last name'), max_length=30, blank=True)
	default_location = models.PointField(srid=4326, null=True, blank=True)
	date_joined = models.DateTimeField(_('date joined'), auto_now_add=True)
	is_active = models.BooleanField(_('active'), default=True)
	is_admin = models.BooleanField(default=False)
	avatar = models.ImageField(upload_to='avatars/', null=True, blank=True)
	is_verified = models.BooleanField(default=False)
	#timestamp as per coding4enterpreneurs
	#timestamp = models.DateTimeField(auto_now=False, auto_now_add=True)
	#category = models.CharField(max_length=30)
	
	objects = UserManager()
	USERNAME_FIELD = 'email'
	REQUIRED_FIELDS = []
	
	class Meta:
		verbose_name = _('user')
		verbose_name_plural = _('users')
	
	def get_full_name(self):
		'''
		Returns the first_name plus the last_name, with a space in between.
		'''
		full_name = '%s %s' % (self.first_name, self.last_name)
		return full_name.strip()
	
	def get_short_name(self):
		'''
		Returns the short name for the user.
		'''
		return self.first_name
	
	@property
	def is_staff(self):
		"Is the user a member of staff?"
		# Simplest possible answer: All admins are staff
		return self.is_admin
	
	def email_user(self, subject, message, from_email=None, **kwargs):
		'''
		Sends an email to this User.
		'''
		send_mail(subject, message, from_email, [self.email], **kwargs)

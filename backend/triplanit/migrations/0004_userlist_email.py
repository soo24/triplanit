# Generated by Django 4.0.6 on 2022-08-23 00:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('triplanit', '0003_remove_userlist_id_token'),
    ]

    operations = [
        migrations.AddField(
            model_name='userlist',
            name='email',
            field=models.CharField(default='', max_length=200),
        ),
    ]

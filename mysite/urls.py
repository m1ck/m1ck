from django.conf.urls.defaults import patterns, include, url

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
    # Examples: 
    url(r'^cgi', 'm1ck.views.index'),#works
    url(r'^cgi/index/(.*)$', 'm1ck.views.index'),    
    #url(r'^cgi/', 'm1ck.views.index'), #
    #url(r'^$', 'm1ck.views.index', name='cgi'),
    # url(r'^mysite/', include('mysite.foo.urls')),
    # (r'^amazon/(.*)$', 'listapp.searchhelp.amazon'),
    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
)

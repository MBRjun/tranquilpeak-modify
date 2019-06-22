---
title: "Tags plugins showcase"
date: 2014-10-29 20:30:05
tags:
- tag plugins
thumbnailImagePosition: left
thumbnailImage: http://d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-6-140.jpg
---

This post is used to show how tag plugins are displayed. See [docs](https://github.com/LouisBarranqueiro/hexo-theme-tranquilpeak/blob/master/docs/user.md#tags) for more info.
<!-- more -->

<!-- toc -->

# Alert

Read documentation to know how to use [Alert tag](https://github.com/LouisBarranqueiro/hexo-theme-tranquilpeak/blob/master/docs/user.md#alert)

{% alert info %}
Praesent diam elit, interdum ut pulvinar placerat, imperdiet at magna.
{% endalert %}

{% alert success %}
Praesent diam elit, interdum ut pulvinar placerat, imperdiet at magna.
{% endalert %}

{% alert warning %}
Praesent diam elit, interdum ut pulvinar placerat, imperdiet at magna.
{% endalert %}

{% alert danger %}
Praesent diam elit, interdum ut pulvinar placerat, imperdiet at magna.
{% endalert %}

# Block Quote

Read documentation to know how to use [Block Quote tag](https://hexo.io/docs/tag-plugins.html#Block_Quote)

**Normal blockquote**

> Praesent diam elit, interdum ut pulvinar placerat, imperdiet at magna.

**Quote from a book**

{% blockquote David Levithan, Wide Awake %}
Do not just seek happiness for yourself. Seek happiness for all. Through kindness. Through mercy.
{% endblockquote %}

**Quote from Twitter**

{% blockquote @DevDocs https://twitter.com/devdocs/status/356095192085962752 %}
NEW: DevDocs now comes with syntax highlighting. http://devdocs.io
{% endblockquote %}

**Quote from an article on the web**

{% blockquote Seth Godin http://sethgodin.typepad.com/seths_blog/2009/07/welcome-to-island-marketing.html Welcome to Island Marketing %}
Every interaction is both precious and an opportunity to delight.
{% endblockquote %}

# Code Block

Read documentation to know how to use [Code Block tag](https://hexo.io/docs/tag-plugins.html#Code_Block)

<p></p>

**Normal code block**

``` js
alert('Hello World!');
alert('Hello World!');
```

**With caption**

{% codeblock Array.map %}
array.map(callback[, thisArg])
{% endcodeblock %}

**With caption and URL**

{% codeblock apache.conf lang:apacheConf http://underscorejs.org/#compact apache.conf %}
# rewrite`s rules for wordpress pretty url
LoadModule rewrite_module  modules/mod_rewrite.so
RewriteCond %{REQUEST_FILENAME} !-f

<Location /maps/>
  RewriteMap map txt:map.txt
  RewriteMap lower int:tolower
  RewriteCond %{REQUEST_URI} ^/([^/.]+)\.html$ [NC]
  RewriteCond ${map:${lower:%1}|NOT_FOUND} !NOT_FOUND
  RewriteRule .? /index.php?q=${map:${lower:%1}} [NC,L]
</Location>
{% endcodeblock %}

# Gist

Read documentation to know how to use [Gist tag](https://hexo.io/docs/tag-plugins.html#Gist)

<p></p>

{% gist 996818 %}

# Image

Read documentation to know how to use [Image tag](https://github.com/LouisBarranqueiro/hexo-theme-tranquilpeak/blob/master/docs/user.md#image)

<p></p>

{% image fancybox fig-100 http://d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-15.jpg http://d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-15-750.jpg %}
{% image fancybox nocaption fig-50 http://d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-4.jpg http://d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-4-375.jpg"Ferrari" %}
{% image fancybox nocaption fig-50 http://d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-12.jpg http://d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-12-375.jpg "BMW i8 Concept" %}

{% image fancybox nocaption fig-33  http://d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-14.jpg http://d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-14-250.jpg %}
{% image fancybox nocaption fig-33 http://d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-9.jpg http://d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-9-250.jpg %}
{% image fancybox nocaption fig-33 http://d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-2.jpg http://d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-2-250.jpg %}

{% image right fancybox fig-75 http://d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-11.jpg http://d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-11-560.jpg %}
{% image right fancybox fig-25 http://d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-8.jpg http://d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-8-185.jpg %}
{% image right fancybox fig-25 http://d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-10.jpg http://d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-10-185.jpg %}
{% image right fancybox fig-25 http://d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-5.jpg http://d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-5-185.jpg %}

{% image fancybox fig-50 http://d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-13.jpg http://d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-13-375.jpg %}
{% image fancybox fig-25 http://d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-17.jpg http://d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-17-185.jpg %}
{% image fancybox fig-25 http://d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-18.jpg http://d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-18-185.jpg %}
{% image fancybox fig-25 http://d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-19.jpg http://d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-19-185.jpg %}
{% image fancybox fig-25 clear http://d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-20.jpg http://d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-20-185.jpg %}

{% image fancybox fig-25 http://d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-21.jpg http://d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-21-185.jpg %}
{% image fancybox fig-25 http://d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-22.jpg http://d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-22-185.jpg %}
{% image fancybox fig-25 http://d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-23.jpg http://d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-23-185.jpg %}
{% image fancybox fig-25 clear http://d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-24.jpg http://d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-24-185.jpg %}

{% image fancybox fig-20 http://d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-25.jpg http://d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-25-150.jpg %}
{% image fancybox fig-20 http://d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-26.jpg http://d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-26-150.jpg %}
{% image fancybox fig-20 http://d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-27.jpg http://d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-27-150.jpg %}
{% image fancybox fig-20 http://d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-28.jpg http://d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-28-150.jpg %}
{% image fancybox fig-20 clear http://d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-29.jpg http://d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-29-150.jpg %}
{% image fancybox fig-20 http://d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-35.jpg http://d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-35-150.jpg %}
{% image fancybox fig-20 http://d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-30.jpg http://d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-30-150.jpg %}
{% image fancybox fig-20 http://d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-31.jpg http://d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-31-150.jpg %}
{% image fancybox fig-20 http://d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-32.jpg http://d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-32-150.jpg %}
{% image fancybox fig-20 clear http://d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-34.jpg http://d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-34-150.jpg %}

# Video

{% video https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4 "Self hosted video" %}


# jsFiddle

Read documentation to know how to use [jsFiddle tag](https://hexo.io/docs/tag-plugins.html#jsFiddle)

<p></p>

{% jsfiddle dpgvst4n %}

# Pull Quote

Read documentation to know how to use [Pull Quote tag](https://hexo.io/docs/tag-plugins.html#Pull_Quote)

Donec non tempus arcu.
Phasellus adipiscing, mauris nec mollis egestas, ipsum nunc auctor velit, et rhoncus lorem ipsum at ante. Duis vel mauris nulla. Maecenas mattis interdum ante, quis sagittis.
{% pullquote left %}
Here is a pullquote left. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
{% endpullquote %}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempus molestie arcu, et
fringilla mauris placerat ac. Nullam luctus bibendum risus. Ut cursus sed ipsum feugiat egestas. Suspendisse elementum, velit eu consequat consequat, augue lorem dapibus libero, eget pulvinar dolor est sit amet nulla. Suspendisse a porta tortor, et posuere mi. Pellentesque ultricies, mi quis volutpat malesuada, erat felis vulputate nisl, ac congue ante tortor ut ante. Proin aliquam sem vel mauris tincidunt, elementum ullamcorper nisl pretium, ultrices cursus justo. Mauris porttitor commodo eros, ac ornare orci interdum in. Cras fermentum cursus leo sed mattis. In dignissim lorem sem, sit amet elementum mauris venenatis ac.
{% pullquote right %}
Here is a pullquote right. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
{% endpullquote %}
Donec non tempus arcu. Phasellus adipiscing, mauris nec mollis egestas, ipsum nunc auctor velit, et rhoncus lorem ipsum at ante. Duis vel mauris nulla.
Maecenas mattis interdum ante, quis sagittis nibh cursus et. Nulla facilisi. Morbi convallis gravida tortor, ut fermentum enim gravida et. Nunc vel dictum nisl, non ultrices libero.
Proin vestibulum felis eget orci consectetur lobortis. Vestibulum augue nulla, iaculis vitae augue vehicula,
dignissim ultrices libero. Sed imperdiet urna et quam ultrices tincidunt nec ac magna. Etiam vel pharetra elit.

# Highlight text

Read documentation to know how to use [Highlight text tag](https://github.com/LouisBarranqueiro/hexo-theme-tranquilpeak/blob/master/docs/user.md#highlight-text)

<p>{% hl_text red %}highlight red{% endhl_text %} dignissim ultrices libero. Sed imperdiet urna et quam ultrices tincidunt nec ac magna. Etiam vel pharetra elit.{% hl_text green %}highlight green{% endhl_text %} dignissim ultrices libero. Sed imperdiet urna et quam ultrices tincidunt nec ac magna. Etiam vel pharetra elit.{% hl_text blue %}highlight blue{% endhl_text %} dignissim ultrices libero. Sed imperdiet urna et quam ultrices tincidunt nec ac magna. Etiam vel pharetra elit.{% hl_text purple %}highlight purple{% endhl_text %} dignissim ultrices libero. Sed imperdiet urna et quam ultrices tincidunt nec ac magna. Etiam vel pharetra elit.{% hl_text orange %}highlight orange{% endhl_text %} dignissim ultrices libero. Sed imperdiet urna et quam ultrices tincidunt nec ac magna. Etiam vel pharetra elit.{% hl_text yellow %}highlight yellow{% endhl_text %} dignissim ultrices libero. Sed imperdiet urna et quam ultrices tincidunt nec ac magna. Etiam vel pharetra elit.{% hl_text cyan %}highlight cyan{% endhl_text %} dignissim ultrices libero. Sed imperdiet urna et quam ultrices tincidunt nec ac magna. Etiam vel pharetra elit.{% hl_text primary %}highlight primary{% endhl_text %} dignissim ultrices libero. Sed imperdiet urna et quam ultrices tincidunt nec ac magna. Etiam vel pharetra elit.{% hl_text success %}highlight success{% endhl_text %} dignissim ultrices libero. Sed imperdiet urna et quam ultrices tincidunt nec ac magna. Etiam vel pharetra elit.{% hl_text warning %}highlight warning{% endhl_text %} dignissim ultrices libero. Sed imperdiet urna et quam ultrices tincidunt nec ac magna. Etiam vel pharetra elit.{% hl_text danger %}highlight danger{% endhl_text %} dignissim ultrices libero. Sed imperdiet urna et quam ultrices tincidunt nec ac magna. Etiam vel pharetra elit.</p>

# Tabbed code block

Read documentation to know how to use [Tabbed code block](https://github.com/LouisBarranqueiro/hexo-theme-tranquilpeak/blob/master/docs/user.md#tabbed-code-block)

<p></p>

{% tabbed_codeblock tabbed_codeblock %}
<!-- tab js -->
function $initHighlight(block, flags) {
  try {
    if (block.className.search(/\bno\-highlight\b/) != -1)
      return processBlock(block.function, true, 0x0F) + ' class=""';
  } catch (e) {
    /* handle exception */
    var e4x =
        <div>Example
            <p>1234</p></div>;
  }
  for (var i = 0 / 2; i < classes.length; i++) { // "0 / 2" should not be parsed as regexp
    if (checkCondition(classes[i]) === undefined)
      return /\d+[\s/]/g;
  }
  console.log(Array.every(classes, Boolean));
}
<!-- endtab -->
<!-- tab css -->
@media screen and (-webkit-min-device-pixel-ratio: 0) {
  body:first-of-type pre::after {
    content: 'highlight: ' attr(class);
  }
  body {
    background: linear-gradient(45deg, blue, red);
  }
}

@import url('print.css');
@page:right {
 margin: 1cm 2cm 1.3cm 4cm;
}

@font-face {
  font-family: Chunkfive; src: url('Chunkfive.otf');
}

div.text,
#content,
li[lang=ru] {
  font: Tahoma, Chunkfive, sans-serif;
  background: url('hatch.png') /* wtf? */;  color: #F0F0F0 !important;
  width: 100%;
}
<!-- endtab -->
<!-- tab html -->
<?xml version="1.0"?>
<response value="ok" xml:lang="en">
  <text>Ok</text>
  <comment html_allowed="true"/>
  <ns1:description><![CDATA[
  CDATA is <not> magical.
  ]]></ns1:description>
  <a></a> <a/>
</response>


<!DOCTYPE html>
<title>Title</title>

<style>body {width: 500px;}</style>

<script type="application/javascript">
  function $init() {return true;}
</script>

<body>
  <p checked class="title" id='title'>Title</p>
  <!-- here goes the rest of the page -->
</body>
<!-- endtab -->
{% endtabbed_codeblock %}

# Youtube

Read documentation to know how to use [Youtube tag](https://hexo.io/docs/tag-plugins.html#YouTube)

<p></p>

{% youtube GmfDbshFF74 %}

# Vimeo

Read documentation to know how to use [Vimeo tag](https://hexo.io/docs/tag-plugins.html#Vimeo)

<p></p>

{% vimeo 147585091 %}

# Wide image

Read documentation to know how to use [Wide image tag](https://github.com/LouisBarranqueiro/hexo-theme-tranquilpeak/blob/master/docs/user.md#wide-image)

At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.

<p></p>

{% wide_image http://d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-1.jpg "Mercedes SLS" %}

At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.

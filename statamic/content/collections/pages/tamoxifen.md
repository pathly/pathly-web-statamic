---
id: 0c70512f-c4ec-4640-8e88-707b66cb0aac
blueprint: tamoxifen
title: Tamoxifen
image_position: center
updated_by: 31bb3955-fa9f-477e-94b8-d1afcdc3367e
updated_at: 1646146615
image: Tamoxifen--1.png
template: tamoxifen
type: info
content:
  -
    type: paragraph
    content:
      -
        type: text
        text: 'Hallo, '
      -
        type: text
        marks:
          -
            type: bold
        text: bold
  -
    type: paragraph
    content:
      -
        type: text
        text: 'Das ist ein ganz normaler Text.'
  -
    type: set
    attrs:
      values:
        type: quote
        content_quote_paragraph: '»Das ist ein Zitat.«'
        content_quote_author: Autor
  -
    type: heading
    attrs:
      level: 2
    content:
      -
        type: text
        text: 'Hier kommt eine Liste'
  -
    type: bullet_list
    content:
      -
        type: list_item
        content:
          -
            type: paragraph
            content:
              -
                type: text
                text: erstens
      -
        type: list_item
        content:
          -
            type: paragraph
            content:
              -
                type: text
                text: zweitens
  -
    type: set
    attrs:
      values:
        type: images
        content_images:
          - Tamoxifen--1.png
          - fundraising-video_thumbnail.png
  -
    type: set
    attrs:
      values:
        type: callout
        content_callout:
          -
            type: heading
            attrs:
              level: 2
            content:
              -
                type: text
                text: 'Noch eine Liste'
          -
            type: bullet_list
            content:
              -
                type: list_item
                content:
                  -
                    type: paragraph
                    content:
                      -
                        type: text
                        text: eins
              -
                type: list_item
                content:
                  -
                    type: paragraph
                    content:
                      -
                        type: text
                        text: zwei
              -
                type: list_item
                content:
                  -
                    type: paragraph
                    content:
                      -
                        type: text
                        text: drei
        content_callout_content:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Hier ist noch eine Liste'
          -
            type: bullet_list
            content:
              -
                type: list_item
                content:
                  -
                    type: paragraph
                    content:
                      -
                        type: text
                        text: eins
              -
                type: list_item
                content:
                  -
                    type: paragraph
                    content:
                      -
                        type: text
                        text: zwei
              -
                type: list_item
                content:
                  -
                    type: paragraph
                    content:
                      -
                        type: text
                        text: drei
        content_callout_color: '#BAEDE3'
  -
    type: set
    attrs:
      values:
        type: links
        content_links:
          -
            content_link_icon: null
            content_link_title: 'Ein Link'
            content_link_url: www.google.com
          -
            content_link_icon: null
            content_link_title: 'Noch einer'
            content_link_url: www.google.com
---

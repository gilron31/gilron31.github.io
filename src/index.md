---
title: What I Do I Understand
layout: "base.njk"
---
<div class="home_title"> {{ title }}</div>

Hi, my name is Gil and I like to learn things. Among all the things i've learned, I've discovered that those which stuck the best were those that involved **doing**, rather then **reading** or **hearing**.
This website/blog/whatever is dedicated to sharing interesting learning experiences me (or my friends) had. The theme however, is "Learning by Doing". Therefore each story is arranged like a mini-course, where the main emphasis is on the exercises.
    

# Stories
{% for story in collections.story0 %}
- [{{story.data.title}}]({{story.url}}) 
{% endfor %}


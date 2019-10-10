json.array! @blog do |blog|
  json.title blog.title
  json.video_url blog.video_url
  json.text simple_format(blog.text)
  json.id blog.id
end

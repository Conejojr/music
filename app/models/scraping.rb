class Scraping
  def self.information
    agent = Mechanize.new 
    
    page = agent.get("http://www.billboard-japan.com/charts/detail/?a=uhot100")
    img_url = page.search(".name_td img")
    music_title = page.search(".musuc_title")
    artist_name = page.search(".artist_name")

    for i in 0..19
      img = img_url[i].get_attribute("src")
      title = music_title[i].inner_text
      name = artist_name[i].inner_text

      @tune = Tune.new(img_url: img, music_title: title, artist_name: name)
      @tune.save
    end
  end
end

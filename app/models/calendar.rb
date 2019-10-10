class Calendar
require 'date'

  def self.year
    day = Date.today
  end
  

  def self.date
    year = Date.new.year
    month = Date.new.month

    lastday = Date.new(year, month, -1)
    last_day = lastday.day
  end


  def self.start
    year = Date.new.year
    month = Date.new.month

    firstday = Date.new(year, month, 1)
    first_day = firstday.wday

    space = []
    for i in 1..first_day do
      space <<  '　　'
    end
    space.join("")
    
  end
end
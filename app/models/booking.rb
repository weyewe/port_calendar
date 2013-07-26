class Booking < ActiveRecord::Base
  attr_accessible :start_datetime, :end_datetime,
          :title, :calendar_id 
          
  def self.active_objects
    self
  end
  
  
  # endDate = ( now + 1.day ).to_date.to_datetime
  # startDate = now.to_date.to_datetime
  
  def self.bookings_in_between(startDate, endDate)
    self.where{
      ( start_datetime.lte endDate ) &
      (
        (
          ( end_datetime.gte endDate ) &
          ( start_datetime.gte startDate)
        ) |
        (
          ( start_datetime.gte startDate) & 
          ( end_datetime.lte endDate )
        ) |
        (
          ( start_datetime.lte startDate) & 
          ( end_datetime.lte endDate ) &
          ( end_datetime.gte startDate)
        )  |
        (
          ( start_datetime.lte startDate) & 
          ( end_datetime.gte endDate)
        )
      )
    }
  end
end

class Booking < ActiveRecord::Base
  def self.active_objects
    self
  end
end

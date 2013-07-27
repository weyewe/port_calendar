json.success true 
json.total @total
json.bookings @objects do |object|
	json.id 								object.id 

	json.start_datetime 		object.start_datetime.to_datetime.new_offset( Rational(7,24) ) .to_time.iso8601
	json.end_datetime 			object.end_datetime.to_datetime.new_offset( Rational(7,24) ) .to_time.iso8601

	json.title 							object.title
	json.calendar_id 				object.calendar_id


	
end

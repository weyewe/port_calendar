class Api::BookingsController < Api::BaseApiController
  
  def index
    if params[:livesearch].present? 
      livesearch = "%#{params[:livesearch]}%"
      @objects = Booking.where{
        (is_deleted.eq false) & 
        (
          (name =~  livesearch )
        )
        
      }.page(params[:page]).per(params[:limit]).order("id DESC")
      
      @total = Booking.where{
        (is_deleted.eq false) & 
        (
          (name =~  livesearch )
        )
      }.count
    elsif params[:startDate].present? 
      puts "This is the shite\n"*5
    else
      @objects = Booking.active_objects.page(params[:page]).per(params[:limit]).order("id DESC")
      @total = Booking.active_objects.count
    end
    
    render :json => { :employees => @objects , :total => @total , :success => true }
  end

  def create
    @object = Booking.new(params[:employee])
 
    if @object.save
      render :json => { :success => true, 
                        :employees => [@object] , 
                        :total => Booking.active_objects.count }  
    else
      msg = {
        :success => false, 
        :message => {
          :errors => extjs_error_format( @object.errors ) 
          # :errors => {
          #   :name => "Nama tidak boleh bombastic"
          # }
        }
      }
      
      render :json => msg                         
    end
  end
  
  def show
    @object  = Booking.find params[:id]
    render :json => { :success => true,   
                      :employee => @object,
                      :total => Booking.active_objects.count  }
  end

  def update
    @object = Booking.find(params[:id])
    
    if @object.update_attributes(params[:employee])
      render :json => { :success => true,   
                        :employees => [@object],
                        :total => Booking.active_objects.count  } 
    else
      msg = {
        :success => false, 
        :message => {
          :errors => {
            :name => "Nama tidak boleh kosong"
          }
        }
      }
      
      render :json => msg 
    end
  end

  def destroy
    @object = Booking.find(params[:id])
    @object.delete_object

    if @object.is_deleted
      render :json => { :success => true, :total => Booking.active_objects.count }  
    else
      render :json => { :success => false, :total => Booking.active_objects.count }  
    end
  end
  
  def search
    search_params = params[:query]
    selected_id = params[:selected_id]
    if params[:selected_id].nil?  or params[:selected_id].length == 0 
      selected_id = nil
    end
    
    query = "%#{search_params}%"
    # on PostGre SQL, it is ignoring lower case or upper case 
    
    if  selected_id.nil?  
      @objects = Booking.where{  (name =~ query)   & 
                                (is_deleted.eq false )
                              }.
                        page(params[:page]).
                        per(params[:limit]).
                        order("id DESC")
    else
      @objects = Booking.where{ (id.eq selected_id)  & 
                                (is_deleted.eq false )
                              }.
                        page(params[:page]).
                        per(params[:limit]).
                        order("id DESC")
    end
    
    
    render :json => { :records => @objects , :total => @objects.count, :success => true }
  end
end

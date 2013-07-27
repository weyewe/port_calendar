class Api::CalendarsController < Api::BaseApiController
  
  def index
    if params[:livesearch].present? 
      livesearch = "%#{params[:livesearch]}%"
      @objects = Calendar.where{
        (is_deleted.eq false) & 
        (
          (name =~  livesearch )
        )
        
      }.page(params[:page]).per(params[:limit]).order("id DESC")
      
      @total = Calendar.where{
        (is_deleted.eq false) & 
        (
          (name =~  livesearch )
        )
      }.count
    
    elsif params[:page].present?
      @objects = Calendar.active_objects.page(params[:page]).per(params[:limit]).order("id DESC")
      @total = Calendar.active_objects.count
    else 
      @objects = Calendar.all
      @total = @objects.count 
    end
    
    
    
    render :json => { :calendars => @objects , :total => @total , :success => true }
  end

  def create
    @object = Calendar.new(params[:employee])
 
    if @object.save
      render :json => { :success => true, 
                        :employees => [@object] , 
                        :total => Calendar.active_objects.count }  
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
    @object  = Calendar.find params[:id]
    render :json => { :success => true,   
                      :employee => @object,
                      :total => Calendar.active_objects.count  }
  end

  def update
    @object = Calendar.find(params[:id])
    
    if @object.update_attributes(params[:employee])
      render :json => { :success => true,   
                        :employees => [@object],
                        :total => Calendar.active_objects.count  } 
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
    @object = Calendar.find(params[:id])
    @object.delete_object

    if @object.is_deleted
      render :json => { :success => true, :total => Calendar.active_objects.count }  
    else
      render :json => { :success => false, :total => Calendar.active_objects.count }  
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
      @objects = Calendar.where{  (name =~ query)   & 
                                (is_deleted.eq false )
                              }.
                        page(params[:page]).
                        per(params[:limit]).
                        order("id DESC")
    else
      @objects = Calendar.where{ (id.eq selected_id)  & 
                                (is_deleted.eq false )
                              }.
                        page(params[:page]).
                        per(params[:limit]).
                        order("id DESC")
    end
    
    
    render :json => { :records => @objects , :total => @objects.count, :success => true }
  end
end
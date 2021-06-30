class Api::V1::ModsController < ApiController
  # before_action :authorize_user, except: [:index, :show, :search, :filter]

  # INDEX /mods
  def index
    render json: Mod.all
  end
  
  # SHOW /mods/1
  def show
    render json: Mod.find(params[:id]), serializer: ModsShowSerializer
  end

  # CREATE /mods/new
  def create
    mod = Mod.new(mod_params)
    if mod.save
      render json: mod
    else
      render json: { errors: mod.errors.full_messages }
    end 

  end

  def edit
    render json: Mod.find(params[:id]), serializer: CampgroundModSerializer

  end

  def update
    mod = Mod.find(params[:id])

    if mod.update(mod_params)
      render json: mod
    else
      render json: { errors: mod.errors.full_messages }
    end 
    
  end

  def destroy
    mod = Mod.find(params[:id])

    if mod.destroy
      render json: {destroyed: true}
    end

  end

  protected

  def mod_params
    params.require(:mod).permit([:title, :body])
  end

end
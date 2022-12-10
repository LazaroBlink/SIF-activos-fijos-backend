import { request, Request, Response} from 'express'
import { CreateCategoryDto } from '../dtos/create-category.dto';
import { UpdateCategoryDto } from '../dtos/update-category.dto';
import { Category } from '../models/category';

class CategoriesService {

    private categories = [
        {id: 1, name: 'Escritorios', description: ""},
        {id: 2, name: 'Computadoras', description: ""}
    ]

    public async getList(){
        const categoriesDB = await Category.findAll({})
        return categoriesDB;
    }

    public async getOne( id: number){
        // TODO: agregar mensage de error cuando no se encuentra el id de la categoria
        const category = await Category.findOne({ where : { id } })
        return category;
    }

    public async create(createCategoryDto: CreateCategoryDto){

        const craeteCategory = await Category.create(createCategoryDto)

        return craeteCategory

    }

    public async update(updateCategoryDto: UpdateCategoryDto, id: number){

        const category = await this.getOne(id)

        if(!category){

            return null
        }

        const updateCategory = {
            id,
            ...updateCategoryDto
        }

        const updatedCategory = await Category.update(updateCategory, { where : {id}})

        return this.getOne(id);
    }

        public async delete(id: number){

            const category = await this.getOne(id)

            if(!category){
                return null
            }

            const deletedCategory = await Category.destroy({ where: { id }})
            return category;
    }
}

export default new CategoriesService();
import { Button, Icons } from 'shared/ui'
import { withHomeLayout } from 'widgets/layouts/home'
import { CategoryListItem } from 'entities/category'

const CategoriesPage = () => {
  return (
    <div className={'flex w-[560px] flex-col gap-6'}>
      <div className={'flex items-center justify-between'}>
        <div className={'flex items-center gap-2.5'}>
          <h2 className={'text-[32px] font-bold'}>Категории транзакций</h2>
          <Icons.info />
        </div>
        <Button>Plus</Button>
      </div>
      <div className={'flex flex-col gap-2.5'}>
        <CategoryListItem
          title={'Продукты'}
          emoji={'🍎'}
          sum={430.09}
          currency={'BYN'}
        />
        <CategoryListItem title={'Продукты'} sum={430.09} currency={'BYN'} />
        <CategoryListItem title={'Продукты'} sum={430.09} currency={'BYN'} />
      </div>
    </div>
  )
}

export default withHomeLayout(CategoriesPage)

'use client'

import { Popover, PopoverContent, PopoverTrigger } from '@heroui/react'
import { Button, Translate } from 'shared/ui'
import { useDeleteCategory } from '../model'
import { FC } from 'react'

type DeleteCategoryButton = {
  uuid: string
}

export const DeleteCategoryButton: FC<DeleteCategoryButton> = ({ uuid }) => {
  const deleteCategory = useDeleteCategory()
  return (
    <Popover placement="bottom-end">
      <PopoverTrigger>
        <Button variant="icon" iconStart="moreVertical" />
      </PopoverTrigger>
      <PopoverContent
        className={'bg-bg-neutral-primary rounded-2xl border p-1'}
      >
        <div className="flex items-center gap-2.5">
          <Button
            variant={'ghost'}
            iconStart={'trashBin'}
            className={
              '[&_svg]:fill-icon-semantic-error-primary text-text-semantic-error-primary rounded-xl px-3 py-2 font-bold'
            }
            onClick={() => deleteCategory({ uuid })}
          >
            <Translate value={'categories.delete'} />
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

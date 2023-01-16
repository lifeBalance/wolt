import React from 'react'

type Props = {
  label: string
  type: string
  id: string
  placeholder: string
  value: string | number
  unit?: string
  changeHandler: React.ChangeEventHandler<HTMLInputElement>
}

function Input(props: Props) {
  return (
    <div className='md:grid md:grid-cols-3 gap-2'>
      <label className='text-2xl font-medium text-white pb-2 capitalize align-left md:col-span-1 md:w-40 md:break-words'>
        {props.label}
      </label>

      <div className='flex items-center space-x-2 md:col-span-2'>
        <input
          id={props.id}
          type={props.type}
          className='bg-gray-50 border border-gray-300 rounded-md px-4 py-1 text-gray-700 text-2xl max-w-[280px] md:max-w-md placeholder:text-gray-300 min-w-full'
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.changeHandler}
        />
        <span className='text-white text-xl'>{props.unit}</span>
      </div>
    </div>
  )
}

export default Input

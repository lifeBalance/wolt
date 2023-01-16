import React from 'react'
import { HandRaisedIcon } from '@heroicons/react/24/outline'

type errorType = { value: boolean, message: string }

interface errorsInterface {
  [key: string]: errorType
}

type Props = {
  label: string
  type: string
  id: string
  placeholder: string
  value: string | number
  unit?: string
  min?: string | number
  changeHandler: React.ChangeEventHandler<HTMLInputElement>
  isRequired: boolean,
  errors?: errorsInterface
}

function Input(props: Props) {
  return (
    <div className='md:grid md:grid-cols-3 gap-2'>
      <label className='text-2xl font-medium text-white pb-2 capitalize align-left md:col-span-1 md:w-40 md:break-words'>
        {props.label}
      </label>

      <div className='flex items-center space-x-2 md:col-span-2 relative pb-12'>
        <input
          id={props.id}
          type={props.type}
          className='bg-gray-50 border border-gray-300 rounded-md px-4 py-1 text-gray-700 text-2xl max-w-[280px] md:max-w-md placeholder:text-gray-300 min-w-full'
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.changeHandler}
          min={props.min}
          required={props.isRequired}
        />
        <span className='text-white text-xl'>{props.unit}</span>
        {props.errors && props.errors[props.id].value &&
          <p className='absolute top-12 right-2 text-white text-sm'>
            <HandRaisedIcon className='inline w-4 -mt-1 mx-2' />
            {`${props.errors[props.id].message}`}
          </p>}
      </div>
    </div>
  )
}

export default Input

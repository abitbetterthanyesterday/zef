import { Button, FormLabel, Input, Radio, RadioGroup } from '@chakra-ui/react'

import { FormProvider, useForm } from '@redwoodjs/forms'
import { MetaTags } from '@redwoodjs/web'

interface FormValues {
  brand: string
  model: string
  category: string
}
const PostAdPage = () => {
  const adCategories = [
    'wing',
    'harness',
    'rescue',
    'instruments & accessories',
  ]
  const methods = useForm<FormValues>()
  const { register, handleSubmit } = methods

  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <>
      <MetaTags title="PostAd" description="PostAd page" />

      <h1>PostAdPage</h1>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Category */}
          <RadioGroup title="category">
            {adCategories.map((category) => (
              <FormLabel key={category}>
                {category}
                <Radio
                  {...register('category')}
                  value={category}
                  id={category}
                />
              </FormLabel>
            ))}
          </RadioGroup>
          <FormLabel>
            Brand
            <Input {...register('brand')} />
          </FormLabel>
          <FormLabel>
            Model
            <Input {...register('model')} />
          </FormLabel>
          <Button type="submit">Submit</Button>
        </form>
      </FormProvider>
    </>
  )
}

export default PostAdPage

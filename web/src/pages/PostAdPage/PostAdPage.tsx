import { FormLabel, Radio, RadioGroup } from '@chakra-ui/react'

import { Form, useForm } from '@redwoodjs/forms'
import { MetaTags } from '@redwoodjs/web'

const PostAdPage = () => {
  const adCategories = [
    'wing',
    'harness',
    'rescue',
    'instruments & accessories',
  ]
  const methods = useForm()
  const { register } = methods
  return (
    <>
      <MetaTags title="PostAd" description="PostAd page" />

      <h1>PostAdPage</h1>
      <Form {...methods}>
        {/* Category */}
        <RadioGroup title="category">
          {adCategories.map((category) => (
            <FormLabel key={category}>
              {category}
              <Radio {...register(category)} value={category} id={category} />
            </FormLabel>
          ))}
        </RadioGroup>
      </Form>
    </>
  )
}

export default PostAdPage

import PolicyForm from '@/components/forms/policies'
import FormContainer from '../forms/formsContainer'
import { createPolicyAction } from '@/actions/policies.actions'
import { policieSchema } from '../schemas/policies.schema'

export default function PoliciesModal() {
  return (
    <FormContainer action={createPolicyAction} schema={policieSchema}>
      {({ register, errors, setValue }) => <PolicyForm register={register} errors={errors} setValue={setValue} />}
    </FormContainer>
  )
}

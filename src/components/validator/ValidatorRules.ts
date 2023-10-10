import { reactive } from 'vue';
import { Lead } from '../Types/types';
import type { FormRules } from 'element-plus';

export const formRules = reactive<FormRules<Lead>>({
  type: [
    {
      required: true,
      message: 'Please select one lead type',
      trigger: 'change',
    },
  ],
  lead_source: [
    {
      required: true,
      message: 'Please enter a valid Lead Source',
      trigger: 'blur',
    },
    { min: 3, message: 'Please enter a valid', trigger: 'blur' },
  ],
  name: [
    {
      required: true,
      message: 'Please enter a valid name',
      trigger: 'change',
    },
  ],
  email: [
    {
      required: true,
      message: 'Please enter a valid email address',
      trigger: 'blur',
    },
    {
      type: 'email',
      message: 'Invalid email format',
      trigger: ['blur', 'change'],
    },
  ],
  phone: [
    {
      required: true,
      message: 'Please enter a valid phone',
      trigger: 'blur',
    },
    {
      type: 'number',
      message: 'Phone must be a number',
    },
  ],
  agent_id: [
    {
      required: true,
      message: 'Please enter a valid agent id',
      trigger: 'blur',
    },
    {
      type: 'number',
      message: 'Phone must be a number',
    },
  ],
  property_id: [
    {
      required: true,
      message: 'Please enter a valid propertyId',
      trigger: 'blur',
    },
    { min: 3, message: 'Please enter a valid', trigger: 'blur' },
  ],
});

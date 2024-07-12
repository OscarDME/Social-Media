import { Tags } from 'lucide-react'
import * as z from 'zod'

export const SignupValidation = z.object({
    name: z.string().min(2, {message :'Name must be at least 2 characters'}).max(50),
    username: z.string().min(2, {message: 'Username must be at least 2 characters'}).max(50),
    email: z.string().email({message: 'Invalid Email'}),
    password: z.string().min(8, {message: 'Password must be at least 8 characters'}),
  })

  export const SigninValidation = z.object({
    email: z.string().email({message: 'Invalid Email'}),
    password: z.string().min(8, {message: 'Password must be at least 8 characters'}),
  })

  export const PostValidation = z.object({
    caption: z.string().min(5, {message: 'Caption must be at least 5 characters'}).max(220, {message: 'Caption must be less than 220 characters'}),
    file: z.custom<File[]>(),
    location: z.string().min(2, {message: 'Location must be at least 5 characters'}).max(50, {message: 'Location must be less than 50 characters'}),
    tags: z.string(),
  })
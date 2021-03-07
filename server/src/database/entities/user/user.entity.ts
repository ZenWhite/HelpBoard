import { Column, Entity } from 'typeorm'
import { BaseEntity } from '../base/base.entity'

@Entity()
export class User extends BaseEntity {
  @Column()
  name: string

  @Column()
  password: string

  @Column()
  salt: string

  @Column({
    unique: true
  })
  email: string
}

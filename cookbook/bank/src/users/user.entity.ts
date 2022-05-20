
import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
export class UserEntity {
       
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ nullable: false })
    fullName: string

    @Column({ nullable: false, unique: true })
    email: string

    @Column({ nullable: false, unique: true  })
    passportNumber: string

    @Column({ nullable: false,  })
    phoneNumber: string

    @Column({ nullable: false,  })
    password: string
 
    @Column({ nullable: false, default: true  })
    isActive: boolean
 
    constructor(initialValues: Partial<UserEntity>) {
        Object.assign(this, initialValues)
    }
}
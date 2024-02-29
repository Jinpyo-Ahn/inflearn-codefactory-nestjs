import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';

export enum Role {
  USER = 'user',
  ADMIN = 'admin',
}

@Entity()
export class UserModel {
  /**
   * ID
   * 자동으로 ID를 생성한다.
   * @PrimaryGeneratedColumn() -> 자동 생성 기능 추가
   * Primary Column은 모든 테이블에서 기본적으로 존재해야 한다.
   * 테이블 안에서 각각의 Row를 구분할 수 있는 칼럼이다.
   * @PrimaryColumn()
   */

  /**
   * @PrimaryGeneratedColumn('uuid')
   * PrimaryGeneratedColumn -> 순서대로 값이 증가한다.
   * 1, 2, 3, 4, 5 -> 999999
   *
   * UUID
   * adfasdfasdf-agasdfasdfgasdg-asdfasgasdf-qerasdgasdfaerq -> 5개의 부분으로 구성된다.
   */
  @PrimaryGeneratedColumn()
  id: number;

  // 제목
  @Column({
    // 데이터베이스에서 해당 데이터 타입
    // 작성하지 않아도 자동으로 유추된다.
    type: 'varchar',

    // 데이터베이스 칼럼 이름
    // 프로퍼티 이름으로 자동 유추된다.
    name: 'title',

    // 값의 길이
    // 입력 할 수 있는 글자의 길이가 300
    length: 300,

    // null이 가능한지 여부
    nullable: true,

    //update 가능한지 여부
    update: false,
    select: false,

    default: 'default value',
    unique: false,
  })
  title: string;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.USER,
  })
  role: Role;
  // 데이터 생성 일자
  // 데이터가 생성되는 날짜와 시간이 자동으로 생성된다.
  @CreateDateColumn()
  createdAt: Date;

  // 데이터 업데이트 일자
  // 데이터가 업데이트되는 날짜와 시간이 자동으로 생성된다.
  @UpdateDateColumn()
  updatedAt: Date;

  // 데이터가 업데이트 될 때마다 1씩 증가한다.
  // 초기 값은 1이다.
  // save 함수가 몇번 불렸는지 체크
  @VersionColumn()
  version: number;

  @Column()
  @Generated('uuid')
  additionalId: string;
}

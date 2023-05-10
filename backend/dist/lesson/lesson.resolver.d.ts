import { LessonService } from './lesson.service';
import { CreateLessonInput } from './lesson.input';
import { AssignStudentsToLessonInput } from './assign-students-to-lesson.input';
import { Lesson } from './lesson.entity';
import { UserService } from '../users/user.service';
export declare class LessonResolver {
    private lessonService;
    private userService;
    constructor(lessonService: LessonService, userService: UserService);
    lesson(id: string): Promise<Lesson>;
    lessons(): Promise<Lesson[]>;
    createLesson(createLessonInput: CreateLessonInput): Promise<Lesson>;
    assignStudentsToLesson(assignStudentsToLessonInput: AssignStudentsToLessonInput): Promise<Lesson>;
    students(lesson: Lesson): Promise<import("../users/user.entity").User[]>;
}

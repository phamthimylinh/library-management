import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ResponseDto } from '../dto/response.dto';

@Injectable()
export class TransformInterceptor<T>
    implements NestInterceptor<T, ResponseDto<T>> {
    intercept(
        context: ExecutionContext,
        next: CallHandler,
    ): Observable<ResponseDto<T>> {
        return next.handle().pipe(
            map((data) => ({
                statusCode: context.switchToHttp().getResponse().statusCode || 200,
                message: 'Success',
                data,
            })),
        );
    }
}

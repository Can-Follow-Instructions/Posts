import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import * as AWS from 'aws-sdk';
import { AWSError, SNS } from 'aws-sdk';

@Injectable()
export class NotificationMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    // Set region
    AWS.config.update({ region: 'us-east-1' });

    const sns = new AWS.SNS();

    const publishParams: SNS.PublishInput = {
      TopicArn: 'arn:aws:sns:us-east-1:372024389526:6156SNSTopic',
      Message:
        'Please check out for the update:\n' +
        'Title: ' +
        req.body.title +
        '\nContent: ' +
        req.body.content +
        '\nCreated by user with id=' +
        req.body.userId,
      Subject: 'New Content Was Posted',
    };
    sns.publish(publishParams, publishCallback);
    function publishCallback(err: AWSError, data: SNS.PublishResponse): void {
      console.log('message published');
      console.log('data:');
      console.log(data);
      console.log('err:');
      console.log(err);
    }
    next();
  }
}

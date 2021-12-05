import { Injectable, NestMiddleware } from '@nestjs/common';
import * as express from 'express';
import { NextFunction, Request, Response } from 'express';
import * as AWS from 'aws-sdk';
import { AWSError, SNS } from 'aws-sdk';

@Injectable()
export class NotificationMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    await express.json();
    await express.urlencoded({ extended: true });
    console.log(
      'Request happening:' +
        req.query +
        ',' +
        req.params.id +
        ',' +
        req.body,
    );
    console.log('route:' + req.route);
    console.log('path:' + req.path);
    console.log('params:' + req.params.name + ',' + req.params[0]);

    // Set region
    AWS.config.update({ region: 'us-east-1' });

    const sns = new AWS.SNS();

    const publishParams: SNS.PublishInput = {
      TopicArn: 'arn:aws:sns:us-east-1:372024389526:6156SNSTopic',
      Message: 'Please check out for the update' + req.body,
      Subject: 'New Content Was Posted',
    };
    sns.publish(publishParams, publishCallback);
    function publishCallback(err: AWSError, data: SNS.PublishResponse): void {
      console.log('message published');
      console.log(data);
      console.log(err);
    }

    next();
  }
}

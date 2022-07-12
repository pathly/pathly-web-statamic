<?php

namespace App\Scopes;

use Statamic\Query\Scopes\Scope;

class Story extends Scope {
  /**
   * Apply the scope.
   *
   * @param \Statamic\Query\Builder $query
   * @param array $values
   * @return void
   */
  public function apply($query, $values) {
    $cancer_type = $values->get("filter_cancer_type");
    $age = $values->get("filter_age");
    $id = $values->get("filter_id");

    $query->where("cancer_type", "=", $cancer_type)->orWhereBetween("age", [$age - 5, $age + 5])->where("id", "!=", $id);
  }
}
